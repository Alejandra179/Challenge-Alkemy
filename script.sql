CREATE TABLE `admin_pres_personal`.`operations` (`id_operation` INT NOT NULL AUTO_INCREMENT , 
`concept` VARCHAR(255) NOT NULL , `amount` FLOAT NOT NULL , `date` DATE NOT NULL , 
`category` VARCHAR(255) NOT NULL ,  `leavingDate` TIMESTAMP, 
`type_operation` VARCHAR(255) NOT NULL , PRIMARY KEY (`id_operation`)) ENGINE = InnoDB;


CREATE TABLE `admin_pres_personal`.`users` (`id_user` INT NOT NULL AUTO_INCREMENT , `email` VARCHAR(255) NOT NULL , 
`name` VARCHAR(255) NOT NULL , `password` VARCHAR(255) NOT NULL , PRIMARY KEY (`id_user`)) ENGINE = InnoDB;