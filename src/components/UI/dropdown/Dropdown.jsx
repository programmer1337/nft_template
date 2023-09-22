import dropdown from "./dropdown.module.css";
import {useState} from "react";

const MenuItem = ({children}) => {
    return (
        <div className={dropdown.menuItem}>
            {children}
        </div>
    )
}
const Menu = ({children}) => {
    return (
        <div className={dropdown.menu}>
            {children.map(item => (
                <MenuItem>{item}</MenuItem>
            ))}
        </div>
    )
}

const Dropdown = ({children}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(prevState => {
                    return !prevState
                })
                }
                className={dropdown.dropButton}
            >≡
            </button>
            {
                isOpen && (
                    <>
                        <Menu>
                            {children}
                        </Menu>
                    </>
                )
            }
        </>
    )
}

export default Dropdown;