import Item from "./Item";
// Component/ Container to render all Items (arr) as individual Items
const Items = ({ items, removeItem, checkItem }) => {
  return (
    <section className="items">
      {items &&
        items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              removeItem={removeItem}
              checkItem={checkItem}
            />
          );
        })}
    </section>
  );
};

export default Items;
