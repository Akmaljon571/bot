CREATE TABLE users (
    id uuid default gen_random_uuid() PRIMARY KEY,
    charid varchar not null,
    first_name varchar not null,
    username varchar
);

CREATE TABLE cloud_fetch (
    id uuid default gen_random_uuid() PRIMARY KEY,
    method varchar default 'GET',
    url varchar not null default 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
    headers1 varchar not null,
    headers2 varchar not null default 'instagram-media-downloader.p.rapidapi.com'
);

CREATE TABLE sanoq (
    id uuid default gen_random_uuid() PRIMARY KEY,
    count varchar not null,
    newdata varchar not null
);

insert into cloud_fetch(headers1) values('f5d602a575msha11f03335de9104p12bf91jsn5e0242ad517f');
insert into cloud_fetch(headers1) values('86e05fddcdmshfe1657076d0597ap18dcd5jsn0cd27df836cc');
insert into cloud_fetch(headers1) values('22f39ef356mshf7baf59973cef7ep1c6bc5jsn8d6ea9711cc1');
insert into cloud_fetch(headers1) values('84cfdfa097msh1e36e74ad899a7fp1d8592jsn6ee389cb285e');
insert into cloud_fetch(headers1) values('e1f9077bb7msh6cb72d15fcd9d29p1d8cc4jsn242ad016c98e');
insert into cloud_fetch(headers1) values('');
insert into sanoq(count, newdata) values('0', 2);
 