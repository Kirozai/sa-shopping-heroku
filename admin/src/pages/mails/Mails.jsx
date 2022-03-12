import "./mails.css";
import { useDispatch, useSelector } from "react-redux";
import { getMails } from "../../redux/apiCalls";
import { useEffect } from "react";

export default function Mails() {
  const dispatch = useDispatch();
  const mails = useSelector((state) => state.newsletter.mails);
  
  useEffect(() => {
    getMails(dispatch);
  }, [dispatch]);

  return (
    <div className="containerx">
      <div className="containerx2">
        <div class="barx2">E-Mails</div>
        {mails.map((mail)=> {
          return (
          <div >
          <div class="barx">
            <span>{mail.email}</span>
          </div>
          <hr/>
          </div>
          )
        })}
      </div>
    </div>
  );

}
