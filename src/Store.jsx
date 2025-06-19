import { useParams } from "react-router-dom"; // Import useParams
import { AnimatePresence } from "framer-motion";
import { List } from "./List";
import { Item } from "./Item";

function Store() {
  let { id } = useParams(); // Get the 'id' parameter from the URL
  const imageHasLoaded = true; // Your existing logic

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}{" "}
      </AnimatePresence>
    </>
  );
}

export default Store; // Export it
