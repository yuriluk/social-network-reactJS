import React from 'react'
import s from './Header.module.css'
import {NavLink, Redirect} from "react-router-dom";

const Header = (props) => {
    const handleLogout = () => {
        props.logoutUser();
        props.history.push("/")
    }

    return (
        <header className={s.header}>
            <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBIQEA8QEBUVFRIQFxASDxIQDxAQFRUWFxURExYYHSggGBolGxUVITEhJSkrLi4uGB8zODMsNyguLisBCgoKDg0OGxAQGi0gHyUvLy0tLS0rLSstKysrLS0tLS0tLi0tLS0rLTEtLS0tLSstNy0tLS0rLSstLSs3LS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAQUGBwQDAgj/xAA+EAACAgEBBQUEBwYFBQAAAAAAAQIDEQQFBhIhMRNBUWFxIoGRsQcUMkJSocEjYnKS0fAVM0NTghYkg9Lh/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwQFBv/EACURAQACAQQBBAIDAAAAAAAAAAABAhEDBBIhMRNBUZEFFBUicf/aAAwDAQACEQMRAD8A7YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFAAAAAAABCkAFIUCAoAgKQACgAAAIAUCApAKQoAAEAAoAAAAAAAAAAAAAAAAAAAAAABDzarX11/ams/hXtS+CMPq951H7FbfnOfAvhHJYjKTMQ2IGjWb7zi/8ALpa8OKSM1u9vTVq5OvHZ2JZ4MqSkl14H+gmswRaJZ8EKRQAAAABAUAAAAAAAEKAICgAAAAAAgJZNRTbaSSy22kl6sEzhT8xtTbSeWuuO5+D8zA0bQnrpyVDlXp4txlqOk7pLrCr8MeqcuvgevWa6NEeyqUcpf8YLxl4vyMprjprrqRbuPD3avVwrXtPm+kVzk/RGB2ltl4eZKuP4U/a97/oYLbG3I18TcuKXe2/njp6I1+jVyufaSbcV0XTPu8DOKrNmz1U6jUf5NTjH/cnmMX5+Mj1LcmU1+21Us+EILC+JhKdfYuls16Tl/U99G2r49Lpej9pfmJiUy076Rt29Rs9V21alWVzk4NSrSnGeMrpyaMFuVtW9bQ0aliWb6ocUVh4lLhaa8MSZv+91Vm0qYVTtVfBJzTVaak8YXEs+fcYHcndG2naVFl7r7Ktyt7SM/ZlNJqEWnzTzLPu6jE4Osu1FIn/UpqbAAAAAAAAAAAAAAAAAAAAAAAIANJ2trZ7R1K0dMnGmLzZNfeUevuzyXn6GZ3y2i6NM1F4lZ7C8Uu9/A8e4GhUNPK1rnZJ8+/gj0/M21jFeUvO3GpOrrRt48ebf58MjtLUw0dMa61GPLghHujFdZP0/Ns0HbW3FXF4lz6uWcvL7/Nnr342m/rVsc8q1GtfyqT/OXyOY7Z1znZw55Lm/4hEdO3GOo8Q9/wBblfYuuG+S+bfizZqMJJLouRqWw5ftY+j+ODaK5GUMZe+uZ6a5GPrkezTJyeFj3tRXxZR7a5norl/f9+pdNs1y63aePrdF/IyNOwLGswtpn/DPPyJmDD3bvauXF2beU08JvOGufI2E1zZWzbarouceXP2k010NiNVsZ6bK+FABiyAAAAIBQQoAAAAAAAAAAACFIwNH+kCzN1MO5QlLHvSNh3Ta+qVY7k0/XLyYH6RqXHsL0sqLlXL0lhr5F3O2vGK7OT9mTyn3Rk+qfqbLzisfDxqW9LfW5e8MR9JuxLFKWrri5wlGKsSWZQnFKKk14NJc/wB3zORalZm5Lv6+p/U+c+f/ANMFtHczQXtys0lfE+sopwf5Ei/WHrzXvL+f9HY4tSXVNM2fSa2M+/D8G0dOp+j3ZsXlabPrZJoy2l3e0lX2NLTH/gn8xzwnFy7TwlL7MJS9ItmRp2Ze+lFr/wDG/wCh1KEFHokvRJfI/S/vmX1Dg5hPR2w5zqsj5uDR+adTHPKceJeaUl+p1DJjNr7v6bVxcb6K5/vcKjYn4qS5pk5nFr2z9t214zLjj+GfP4S6r3m16DXRujxR98X1i/M49vRsDV7JtU9PdZbp5PkpvjcX14JZ59Oj8jP7j7zK6aeOCWVGdeeWHy4l4osxFo6SJxLpgANbYAAAQoAhQAAAAAAAAAAAAEKAPHtXQR1FM6Z9JLGe9Pul7jkWt012iulXLMWuj+5OHdJdzT/I7Rgx+2djU6uHBbHOPszXKcH4pm7SvFf627hwb3Z+vGa9Wj3aFsrfK6pKMkpx8G8YXkbBp9+6n9um2P8ADwyX5tGibybOegvVU5OUZR7SE8YU1nDyu6Sws+qPFDVw/Evib/19KYzDxf291oTxz99uox300z7rv5F/7FlvlR92u1+qjFfM5pXq49E8+iye2uZrvoxHg/ltz4nH06FHb1kucKoLPfKzi/KK/U+kdfe/vVr0rk/mzUNla3hfA3yfTyZsVNhw3rb5ehobu2pGcsrDVXfirl5OLh+eT16XVcbcWuGS5uL5rH4k+9ZMbVYffTyzdHHdCbfpmKS+OTTFrRaO8vR07zl+N69KrdHcn3Rc15SjzTOS7Lo4NVVOHJucYNL70ZPHT4HW96b+DSW/vR4F6y5Glbo7M7XVRk17Nf7RvzX2V8fkd9fDbby6UikKa2YAAAAAAAAAAAAAEKAAAAgKAICgDXt9tgLW6Zxiv2kHx1vzxzj6NfocghpUniSeU8NPk01yaZ39nPt/t22m9XTHl1tgueH/ALix3eJ1bfUiJ4y8n8ntbXj1Kefdp1OF0WD0wmeCEz0Qmdk1fNWhkK5m0bM1PHBPv6P3GnwmZ7Ydnsv+L9Dj1tKPMOjaak1vhs1dqSy3hLvfcvEyex63h2yWHNrCfVQX2V+vvMRsnSu+Sb/yovr/ALkl3Ly8fEzW0dW60oQWbJcoxS6ebRxRp9vptrE2jlLX97NQ7bI0Q9rh6pd9j+77jObC2WtNUo8nJ+1J+fgfjY+yFV+0n7Vj7+vDnr7zKm2Z9nXEe4CgxZIUAAAABCgCFAAAAAAAAAAAAAAAISSzywnnljxP0QDnG+G57rb1Gli5Q6yqSzKHjKC715GnQmd4Zqu8G5VWok7Kn2Fj5vCzXN/vR/VHZpbjrFni7z8ZznlpfTnEJm5br7GndFOWYVdW+krX+GPljvPdsTcWuqSnfPt2uaio8NWfnL5G4QiksJYXgTV1onqrXs/xcxPPV+nxjHhioVxSSSS/DFfqWjTKLcusn1k+vovA+xTly93GAAEUAAAAAAAAAAAAAAAAAAAAAAAABBgCSeE8LPkup4LNdYv9Jr1z+hkCgYd7Ss/Cl7mT/EbPL+UzHuHCvD8gMN/iNn7v8p+o7Rs/Cn/xZluHy/IqQGOr11j/ANLPplHvqk2suLj5H7IAKQYAoJgAUAgFAAAEAFAAAAAAAAAAEZyjZsNZtzUamz69bo6KbOzhXVnOe7OJLOFhtvx8jq5z23czXaTUXW7L1VdcLnxSptjlRlzfL4vD8+ecIyhjLa9gaK7S6bg1Oqlq5x4m7ZR4XwrmorOW+Xi36nP9i6bWbcnfqJ7Qu0lVdjrrqp5Yaw1yyuWGub5vL6cjoO7mi1FWn7PWahamxuTc1DhSjLnweaWWaj/0Zr9HbbPZmrrrrtlxSqtjngb713CFl9Po62vqVqtXszV29vLT5cbnlyaTSccvm01KDWeazJZZhN+9ta2ja/8A2tlslXVXc6FKTqlFZ48x6NNdcG4bk7ovQu6++7t9Re/bsxhJZ4ml45by36Czdix7YW0OOHZqrsuzabm3jr4YL0jnO3N9NZq76L6pXaXTu2uiEY2OKnNSg7OKUftP2seCTSOjfSdq7Kdm3WVWTqkpVYnCThJZmspNPJ8N8dzHqo6OGm7KiGnslY48LUcNweIpd/sv4mV332JPX6OzTVyjCU3FqUk8Lhkn3EzBiXKr9sajRw02po21PWWzcePRym7OHPWElxSz4c8PwOs72bbWi0Vupf2oxxCL+9bLlGPnza6eDPJu/uZpNNCqT01LuhGObcN5muslk8u/O6920p6evtY16euTssjz7ScnyTj3co5xnvl5CZjJjprO4G19Xp9ZXptfdZatVTG6p2WOfDPm1Hn0bXd6Ge+l3XW0aCM6bbKZdvCLnXOUJcLhY2srn3dPIx20voujHs7NDfZC2E4zTum5xxF55eHQz2/W7lu0dFDTxnXCxThZJyy4PEZJ8OOfeWcZIy0DbG+992z6a3bZp9XVfXC3hnKuVtXDJKeE+/2crx5950XenZt+p0ONPfdVdGEbIShZKDnLhWYSafPK/Mwe930efW+wtpnCu6EK67G03C2MIpKXL7yxjPgb5p4cMYxfcor4LBJmPYhyHZu8Gv2vbpdFCdum7GOdVfXKUJzcXw8Ta5rljEe+UpfhOv1w4YqKzhJLm25NJY5t82/Nmq7n7r26LVa6+yyE46ialFRT4opTsl7XumjbSSsAAIoAAAAAAAACACghQAAAAAARlAGsy2VrE9dwaiXNY0qlZygppTs4nhtPtHKKlzxHHv8AnptJroUuSUm43xshp56lTs7FRxKuVr5PMnnmbUMFyNM1uy9otaTguaddce2xc8ysd1blw55Sar7Re0sPw5rGd25oLLnT2c7I8NsXPgtdeavvLk+fcZbAGRrVen2h9btnxQVM4TrhF2cTqlGP7O5xxh5ec4fgeHRaPaMNPapJuztNNOCep4pzUXD6x7fNKMsPC5deiNzAymGubS02ssV7rbqc6K41xVsW6r+NuTXLHJY5+RjNbs3ab0yj2vFb9ZnOUoW9lxadwko4y+XtOL4cm7AZHzpT4Y568Mc8888LPPvPoARQAAACAUEKAAAAEKBAUAQoAAAAAAAAAAAAAAAAAAAAAAAAAEBQBCgACFAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>
                        {props.login} - <button onClick={handleLogout}>Logout</button>
                    </div>
                    : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header