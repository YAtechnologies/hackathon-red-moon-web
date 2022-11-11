import {
  Button,
  Checkbox,
  Label,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import React from "react";

interface RequestServiceModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  submit: () => void;
}
export default function RequestServiceModal(props: RequestServiceModalProps) {
  return (
    <React.Fragment>
      <Modal
        show={props.isOpen}
        size="md"
        popup={true}
        onClose={props.toggleModal}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Send service request
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="message" value="Message" />
              </div>
              <Textarea helperText="Type your massage"></Textarea>
            </div>
            <div className="w-full">
              <Button onClick={props.submit}>Submit</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
