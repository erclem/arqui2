create database mensajes;

create table msjs(id int(10) auto_increment,mensaje varchar(200),primary key (id) );
create table historial(id int(10) auto_increment,mensaje varchar(200),primary key (id) );

insert into msjs(mensaje) values("si funciona");
insert into msjs(mensaje) values("prueba2");
insert into msjs(mensaje) values("prueba3");
insert into msjs(mensaje) values("prueba4");

DROP TRIGGER IF EXISTS `mensajes`.`historial_BEFORE_INSERT`;

DELIMITER $$
USE `mensajes`$$
CREATE DEFINER=`root`@`localhost` TRIGGER `historial_BEFORE_INSERT` AFTER INSERT ON `historial` FOR EACH ROW BEGIN
insert into msjs(mensaje) values(new.mensaje);
END$$
DELIMITER ;