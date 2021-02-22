-- 菜单表
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `url` varchar(255),
  `base_menu` int,
  `level` int,
  `parent_menu_id` int,
  `sort` int
) ENGINE=InnoDB DEFAULT CHARSET=utf8;