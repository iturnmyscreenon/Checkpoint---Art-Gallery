CREATE TABLE contact (
    name VARCHAR(20) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message VARCHAR (255) NOT NULL
) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO contact (name, email, message)
VALUES (
    'iturnmyscreenon',
    'benoit.galey@gmail.com',
    'test'
);

CREATE TABLE user (
    id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR (255) NOT NULL,
    role varchar(200) DEFAULT 'user'
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
    'L’autre rive',
    'Le temps d’avant, n’était-ce pas un temps des ténèbres, ces temps d’avant l’arrivée du gaz puis de l’électricité ? Les nuits existent-elles encore dans nos villes où brillent en continu de grandes veilleuses que sont les éclairages de nos rues, des bâtiments, des cafés ? Ne grignote-t-on pas de plus en plus ce monde de la nuit en le peuplant d’écrans et de moyens de communication de toutes sortes ?',
    'https://storage.cloud.google.com/skonbarbgallery/144144236_827165064509569_3916554623865483785_n.jpg',
    45
),     (
    2,
    "Le chant d’une tribu",
    "Au delà des terres fermes",
    'https://storage.cloud.google.com/skonbarbgallery/106003108_164859531681587_7688137787485291022_n.jpg',
    60
),     (
    3,
    "Thoorau",
    "Peut-on seulement se figurer,
     Cette absolue liberté
    Quand on s'accroche, désespéré
    A une main étrangère
    Sur un sol étranger.
    Perdu dans Rome civilisée,
    Et dans sa sauvage cruauté,
    Où tous les enfants aliénés,
    Attendent toujours la pluie d'été.
    Il te faut prendre la route du Roi,
    Des scènes malsaines dans la mine d'or",
    'https://storage.cloud.google.com/skonbarbgallery/159666312_1177204059381480_1493699428692949992_n.jpg',
    50
),     (
    4,
    "Nuance pâle",
    "Nuance pâle",
    'https://storage.cloud.google.com/skonbarbgallery/242625757_539923903976790_6395951525722603294_n.jpg',
    35
 ),    (
    5,
    "Nuit mystique",
    "Une chanson sans voix dans une lumière sans âge,
Une peinture accrochée au lierre,
Est nichée dans la mousse émeraude",
    'https://storage.cloud.google.com/skonbarbgallery/173905559_1187487998372445_1433878418213587931_n.jpg',
    90
),   (
      6,
    "Mirage",
    " Il pleut encore ce matin, la fin du bord de mer..",
    'https://storage.cloud.google.com/skonbarbgallery/124002435_429887588000187_8993840996388652727_n.jpg',
    90
) ;


