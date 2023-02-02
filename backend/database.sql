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
    description VARCHAR(1000) NOT NULL,
    image VARCHAR (255) NOT NULL,
    price int(11) NOT NULL
) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO art (id, name, description, image, price)
VALUES (
    1,
    'The Wind',
    'The Wind is an expressionist painting created by Norwegian artist Edvard Munch in 1893.',
    'https://storage.cloud.google.com/skonbarbgallery/144144236_827165064509569_3916554623865483785_n.jpg',
    45
);

