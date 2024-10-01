import { useState } from 'react';
import Router from 'next/router';
import useRequest from '@/hooks/use-request';
import { FormWrapper, FormGrid, FormLabel, FormDetail, SubmitButton } from '../../styles/games/formStyle';

const CreateGame = ({}) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [provider, setProvider] = useState('');
  const [genre, setGenre] = useState('');

  const { doRequest, errors } = useRequest({
    url: 'http://localhost:3000/api/games',
    method: 'post',
    body: {
      title,
      name,
      provider,
      genre
    },
    onSuccess: () => Router.push('/games/list')
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  };

  return (
    <FormWrapper>
      <form onSubmit={onSubmit}>
        <h1>Create a new Ticket</h1>
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
        {errors}
        <SubmitButton type="submit">Create</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default CreateGame;