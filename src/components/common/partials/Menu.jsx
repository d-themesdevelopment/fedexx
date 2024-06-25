import { DownOutlined, UserOutlined } from "@ant-design/icons";
import ALink from "@/components/features/ALink";

const Menu = () => {
    return <ul className="main-nav flex items-center space-x-2 text-sm">
        <li className="relative">
            <ALink href="#" className="flex items-center space-x-2 px-3 py-3">
                <span>Shipping</span>
                <DownOutlined className="text-xs"/>
            </ALink>
        </li>

        <li className="relative">
            <ALink href="#" className="flex items-center space-x-2 px-3 py-3">
                <span>Tracking</span>
                <DownOutlined className="text-xs"/>
            </ALink>
        </li>

        <li className="relative">
            <ALink href="#" className="flex items-center space-x-2 px-3 py-3">
                <span>Design & Print</span>
                <DownOutlined className="text-xs"/>
            </ALink>
        </li>

        <li className="relative">
            <ALink href="#" className="flex items-center space-x-2 px-3 py-3">
                <span>Locations</span>
                <DownOutlined className="text-xs"/>
            </ALink>
        </li>

        <li className="relative">
            <ALink href="#" className="flex items-center space-x-2 px-3 py-3">
                <span>Support</span>
                <DownOutlined className="text-xs"/>
            </ALink>
        </li>
    </ul>
}

export default Menu;