import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ResetModal = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };
  return (
    <div>
      <input type="checkbox" id="reset-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="reset-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="text-center">
            <h1 className="text-2xl  text-secondary pb-3">Enter Your Email</h1>
            <form onSubmit={handleResetPassword}>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input input-bordered input-success w-full max-w-xs mr-1"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-outline btn-secondary text-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
