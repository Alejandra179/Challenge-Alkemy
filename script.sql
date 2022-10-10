CREATE TABLE `admin_pres_personal`.`operations` (`id_operation` INT NOT NULL AUTO_INCREMENT , 
`concept` VARCHAR(255) NOT NULL , `amount` FLOAT NOT NULL , `date` DATE NOT NULL , 
`category` VARCHAR(255) NOT NULL ,  `leavingDate` TIMESTAMP, 
`type_operation` INT NOT NULL , PRIMARY KEY (`id_operation`),
`id_user` INT NOT NULL);


CREATE TABLE `admin_pres_personal`.`users` (`id_user` INT NOT NULL AUTO_INCREMENT , 
`email` VARCHAR(255) NOT NULL , `name` VARCHAR(255) NOT NULL , `password` VARCHAR(255) NOT NULL , 
PRIMARY KEY (`id_user`));

CREATE TABLE `portafolio`.`categories` ( `id_category` INT NOT NULL AUTO_INCREMENT , 
`description` VARCHAR(255) NOT NULL , PRIMARY KEY (`id_category`));

CREATE TABLE `type_operation` ( `id_type` INT NOT NULL AUTO_INCREMENT , `description` VARCHAR(255) NOT NULL 
, PRIMARY KEY (`id_type`));

INSERT INTO `type_operation`(`description`) VALUES ('egress');

INSERT INTO `type_operation`(`description`) VALUES ('income');
