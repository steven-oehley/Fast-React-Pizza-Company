import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

export async function loader() {
  const menu = await getMenu();
  return menu;
}

function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((menuItem) => (
        <MenuItem key={menuItem.id} pizza={menuItem} />
      ))}
    </ul>
  );
}

export default Menu;
