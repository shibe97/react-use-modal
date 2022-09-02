import React from 'react';
import { ModalProvider, useModal } from '../../../../src';

const Modal = () => {
  const [Modal, open, close, isOpen] = useModal('root');

  return (
    <div>
      <div>Modal is Open? {isOpen ? 'Yes' : 'No'}</div>
      <button onClick={open}>OPEN</button>
      <Modal title="Title" description="This is a customizable modal.">
        <button onClick={close}>CLOSE</button>
      </Modal>
    </div>
  );
};
const ModalWithOverrideOptions = () => {
  const [Modal, open, close, isOpen] = useModal('root', {
    components: {
      Modal: ({ title, description, children }) => {
        return (
          <div
            style={{
              padding: '60px 100px',
              backgroundColor: 'cyan', // override
              borderRadius: '10px',
            }}
          >
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
          </div>
        );
      },
    },
  });

  return (
    <div style={{ marginTop: '40px' }}>
      <div>Overrided style modal is Open? {isOpen ? 'Yes' : 'No'}</div>
      <button onClick={open}>OPEN</button>
      <Modal title="Title" description="This is a customizable modal.">
        <button onClick={close}>CLOSE</button>
      </Modal>
    </div>
  );
};

export const ModalWrapper = () => {
  return (
    <ModalProvider
      value={{
        focusTrapOptions: {
          clickOutsideDeactivates: true,
        },
        components: {
          Modal: ({ title, description, children }) => {
            return (
              <div
                style={{
                  padding: '60px 100px',
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                }}
              >
                <h1>{title}</h1>
                <p>{description}</p>
                {children}
              </div>
            );
          },
        },
      }}
    >
      <Modal />
      <ModalWithOverrideOptions />
    </ModalProvider>
  );
};
