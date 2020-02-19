import {Layout, Menu} from "antd";
import Link from "umi/link";
import styles from "./index.css";

const {Header, Footer, Content} = Layout;

export default function (props){
    const menus = [
        {path: '/', name: '商品'},
        {path: '/users', name: '用户'},
        {path: '/about', name: '关于'}
    ];

    const pathname = props.location.pathname;
    const selectedKeys = menus.filter(menu => {
        if (menu.path === '/') return pathname === '/';
        return pathname.startsWith(menu.path);
    }).map(menu => menu.path);

    return (
        // 上中下布局
        <Layout>
            {/* 页头 */}
            <Header className={styles.header}>
                <img className={styles.logo} src="https://img.kaikeba.com/logo-new.png"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={selectedKeys}
                    style={{lineHeight: "64px"}}
                >
                    {menus.map(menu => (
                        <Menu.Item key={menu.path}>
                            <Link to={menu.path}>{menu.name}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Header>
            {/* 内容 */}
            <Content className={styles.content}>
                <div className={styles.box}>{props.children}</div>
            </Content>
            {/* 页脚 */}
            <Footer className={styles.footer}>开课吧</Footer>
        </Layout>
    );
}
