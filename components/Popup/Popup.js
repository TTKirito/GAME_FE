import React, { useState } from 'react';
import { FormDetail, FormGrid } from '@/styles/games/formStyle';
import { FormLabel } from 'react-bootstrap';
import useRequest from '@/hooks/use-request';
import Router from 'next/router';
import { ConfirmButton, PopupBanner, PopupBannerName, PopupContent, PopupFooter, PopupShadow, Popup } from './Style';

const PopupContainer = ({ openPopup, setOpenPopup }) => {
    const [title, setTitle] = useState(openPopup.title);
    const [name, setName] = useState(openPopup.name);
    const [provider, setProvider] = useState(openPopup.provider);
    const [genre, setGenre] = useState(openPopup.genre);

    function close() {
        setOpenPopup(null);
    }

    // API request for updating game (PUT)
    const { doRequest: updateRequest, errors: updateErrors } = useRequest({
      url: `http://localhost:3000/api/games/${openPopup.id}`,
      method: 'put',
      body: {
        title,
        name,
        provider,
        genre,
      },
      onSuccess: () => {
        Router.push('/games/list');
        close();
      }
    });

    // API request for deleting game (DELETE)
    const { doRequest: deleteRequest, errors: deleteErrors } = useRequest({
      url: `http://localhost:3000/api/games/${openPopup.id}`,
      method: 'delete',
      onSuccess: () => {
        Router.push('/games/list');
        close();
      }
    });

    const onSave = async () => {
      await updateRequest();
    };

    const onDelete = async () => {
      await deleteRequest();
    };

    return (
        <>
            <PopupShadow onClick={close} />
            <Popup>
                <PopupBanner img={openPopup.img}>
                    <PopupBannerName>{openPopup.name}</PopupBannerName>
                </PopupBanner>
                <PopupContent>
                    <FormGrid>
                        <div className="form-group">
                            <FormLabel>Title:</FormLabel>
                            <FormDetail
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <FormLabel>Name:</FormLabel>
                            <FormDetail
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <FormLabel>Provider:</FormLabel>
                            <FormDetail
                                value={provider}
                                onChange={(e) => setProvider(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <FormLabel>Genre:</FormLabel>
                            <FormDetail
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                            />
                        </div>
                    </FormGrid>
                    {/* Display errors */}
                    {updateErrors || deleteErrors}
                </PopupContent>
                <PopupFooter>
                    <ConfirmButton onClick={onSave}>Save</ConfirmButton>
                    <ConfirmButton onClick={onDelete} style={{ backgroundColor: 'red' }}>Delete</ConfirmButton>
                </PopupFooter>
            </Popup>
        </>
    );
}

const PopupComponent = (props) => {
    if (!props.openPopup) return null;
    return <PopupContainer {...props} />;
}

export default PopupComponent;
