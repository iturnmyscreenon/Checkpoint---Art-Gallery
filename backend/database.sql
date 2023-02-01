CREATE TABLE user (
    id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR (255) NOT NULL,
    role varchar(200) NOT NULL
) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO user (id, username, email, password, role)
VALUES (
    1,
    'iturnmyscreenon',
    'benoit.galey@gmail.com',
    '31241',
    'admin'
);

CREATE TABLE art (
    id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(150) NOT NULL,
    image VARCHAR (255) NOT NULL,
    price int(11) NOT NULL
) engine = InnoDB DEFAULT charset = utf8;
