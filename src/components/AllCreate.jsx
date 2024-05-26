import CreatecoffeHelper from './CreatecoffeHelper';
import CreateCoffe from './CreateCoffe';
import Order from './Order';

export default function AllCreate() {
  return (
    <div className='create-main-table'>
      <CreatecoffeHelper />
      <div className='coffe-group'>
        <CreateCoffe />
        <Order />
      </div>
    </div>
  );
}
