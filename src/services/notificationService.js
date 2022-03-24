import { toast } from "react-toastify";

const basicConfig = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
};

export const successNotification = (text, config = basicConfig) => {
  toast.success(text, config);
};

export const errorNotification = (text, config = basicConfig) => {
  toast.error(text, config);
};
