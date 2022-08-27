import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  list,
} from "firebase/storage";
import { Container, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import { v4 } from "uuid";

const List = () => {
  const [imageupload, setimageupload] = useState(null);
  const [imagelist, setimagelist] = useState([]);
  const [listdata, setlistdata] = useState([]);

  const imagelistref = ref(storage, "images/");
  const uploadimage = () => {
    if (imageupload == null) return;
    const imageref = ref(storage, `images/${imageupload.name + v4()}`);
    uploadBytes(imageref, imageupload).then((response) => {
      alert("image uploaded");
    });
  };

  const cli = () => {
    listAll(imagelistref).then((response) => {
      console.log("responded");
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimagelist((prev) => [...prev, url]);
        });
      });
    });
  };

  return (
    <div>
      <button onClick={cli}>Show</button>

      <div class="list-group">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-bs-target
        </button>
      </div>

      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </div>
  );
};
export default List;
