import classes from './styles.module.scss'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import logo from '../../../assets/images/logo.png';

const NavHeader = ({ onClick }) => {
  return (
    <div className={classes.toggle}>
      <AiOutlineMenuUnfold onClick={onClick} />
      <figure>
        <img src={logo} alt="logo"  width={'100px'}/>
      </figure>
    </div>
  )
}

export default NavHeader