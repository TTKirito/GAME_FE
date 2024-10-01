import { DialogDetail, DialogGrid, DialogLabel, DialogWrapper } from "./DialogGrid";

const Dialog = ({ dialogs }) => {
  return (
    <DialogWrapper>
      <DialogGrid>
        {dialogs.map((dialog, index) => (
          <DialogDetail $img={dialog.image} key={index} onClick={() => {}}>
            <DialogLabel>{dialog.text}</DialogLabel>
          </DialogDetail>
        ))}
      </DialogGrid>
    </DialogWrapper>
  );
}

export default Dialog;