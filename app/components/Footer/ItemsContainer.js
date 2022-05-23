import Item from "./Item";
import { SERVICES, RESSOURCES, Propos, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={SERVICES} title="Services" />
      <Item Links={RESSOURCES} title="Ressources" />
      <Item Links={Propos} title="À propos de nous" />
      <Item Links={SUPPORT} title="Support" />
    </div>
  );
};

export default ItemsContainer;