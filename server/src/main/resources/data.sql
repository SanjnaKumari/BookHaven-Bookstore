DELETE FROM book;
ALTER TABLE book AUTO_INCREMENT = 1001;

DELETE FROM category;
ALTER TABLE category AUTO_INCREMENT = 1001;

INSERT INTO `category` (`name`) VALUES ('Romance'),('Poetry'),('Fiction'),('Religion'),('Horror'),('Action');

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Icebreaker', 'Hannah Grace', '', 10.99, 0, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Twisted Games', 'Ana Huang', '', 12.69, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Verity', 'Colleen Hoover', '', 3.79, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Wildfire', 'Hannah Grace', '', 6.659, 0, FALSE, FALSE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Clarity Connection', 'Yung Pueblo', '', 2.45, 0, TRUE, FALSE, 1002);
INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Milk Honey', 'Rupi Kaur', '', 1.14, 3, FALSE, FALSE, 1002);
INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Inward', 'Yung Pueblo', '', 2.99, 4, TRUE, FALSE, 1002);
INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Home', 'Whitney Hanson', '', 3.38, 3, FALSE, FALSE, 1002);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Dune', 'Frank Herbert', '', 12.59, 0, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Iron Flame', 'Rebecca Yarros', '', 13.10, 0, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Coworker', 'Freida McFadden', '', 4.24, 0, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('A Little Life', 'Hanya Yanagihara', '', 8.94, 0, TRUE, FALSE, 1003);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Fajr Noor', 'S.hukr', '',7.99, 0, TRUE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Shack', 'William P. Young', '', 2.99, 0, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('A History of God', 'Karen Armstrong', '', 12.99, 0, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Notebook', 'Nicholas Sparks', '',15, 0, TRUE, FALSE, 1004);

INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Troop', 'Nick Cutter', '', 13.99, 4, FALSE, FALSE, 1005);
INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Outsider', 'Stephen King', '', 10.78, 4, TRUE, FALSE, 1005);
INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Woom', 'Duncan Ralston', '', 6.99, 3, FALSE, FALSE, 1005);
INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Penpal', 'Dathan Auerbach', '', 17.75, 4, FALSE, FALSE, 1005);

INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Edge', 'David Baldacci', '', 10.99, 4, FALSE, FALSE, 1006);
INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Thaumatrope', 'Brent Hendricks', '', 11.99, 4, TRUE, FALSE, 1006);
INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Children of Dune', 'Frank Herbert', '', 16.99, 3, FALSE, FALSE, 1006);
INSERT INTO book (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Tree of No', 'Sandy Florian', '', 7.75, 4, FALSE, FALSE, 1006);



