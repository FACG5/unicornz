insert into schools (name)
 values
 ('Brentford School for Girls'),
 ('Camden School for Girls'),
 ('Fulham Cross Girls School'),
 ('Queen Elizabeths School for Girls'),
 ('Langley Park School for Girls');

insert into girls (user_name, first_name, last_name, email, phone_num, school_id, other_school, birthdate, password)
 values
 ('hadam', 'Helary', 'Adam', 'hadam@nameschool.uk','0599999999', 1, '', '01-01-2005', '$2a$10$t3bm8JUU3dwAvUpE0Pr/e.S5XDnaX./JaGpIv5uDX7I51n4JVKH42'),
 ('sjohn', 'Suzan', 'John', 'sjohn@nameschool.uk','0599999999', 2, '',' 01-01-2005', '$2a$10$t3bm8JUU3dwAvUpE0Pr/e.S5XDnaX./JaGpIv5uDX7I51n4JVKH42'),
 ('lmatt', 'lara', 'matt', 'lmatt@nameschool.uk','0599999999', 4, '', '01-01-2005', '$2a$10$t3bm8JUU3dwAvUpE0Pr/e.S5XDnaX./JaGpIv5uDX7I51n4JVKH42'),
 ('jmax', 'Jem', 'Max', 'jmax@nameschool.uk','0599999999', 3, '', '01-01-2005', '$2a$10$t3bm8JUU3dwAvUpE0Pr/e.S5XDnaX./JaGpIv5uDX7I51n4JVKH42');

 insert into registrations (status, registration_date, response)
  values
  ('avilable', '12-12-2018', 'approve'),
  ('avilable', '12-12-2018', 'approve'),
  ('avilable', '12-12-2018', 'approve'),
  ('avilable', '12-12-2018', 'approve');


 insert into company (logo, company_name, description, mobile, website, email, facebook,password)
  values
  ('https://www.sylvanlearning.com/images/default-source/default-album/newsylvan_4c.png', 'Sylvan Learning', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.sylvanlearning.uk', 'sylvanlearning@gmail.com', '/sylvanlearning','123'),
  ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNPkNSg9IRbZigjv8n2GSKEPLyuEMveg61WpoRUyn6_0uyO4q7A', 'STEM Company', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.stemcompnay.uk', 'stemcompany@gmail.com', '/stemcompany','123'),
  ('https://wolffdesign.com.au/wp-content/uploads/2017/02/ReachfortheStars-1.jpg', 'Reach fo the stars', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.reach4stars.uk', 'reach4stars@gmail.com', '/reach4stars','123'),
  ('https://www.infosaas.com/wp-content/uploads/2018/03/me_learning_with_strapline.jpg', 'Me Learning', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.melearning.uk', 'melearning@gmail.com', '/melearning','123'),
  ('https://png2.kisspng.com/20180816/agu/kisspng-acquired-brain-injury-neurofeedback-cognition-ther-5b7643c76bf6e5.5446958115344772554422.png', 'Next Solution', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.nextsolution.uk', 'nextsolution@gmail.com', '/nextsolution','123');

insert into work_experiences (company_id, location, subject, start_date, end_date,  pocket_money, title, max_number, description, video, start_time, end_time)
 values
(1, 'London', 'Science', '2015-01-12', '2015-01-12', 10.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc', '10:30:00', '16:30:00'),
(2, 'London', 'Science', '2015-01-12','2015-01-12', 15.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc', '09:30:00',' 17:30:00'),
(3, 'Manshester', 'Technology','2015-01-12', '2015-01-12', 10.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc', '10:30:00',' 16:30:00'),
(4, 'London', 'Science','2015-01-12', '2015-01-12', 10.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc','11:30:00', '19:30:00'),
(1, 'Liverpool', 'Engineering', '2015-01-12','2015-01-12', 10.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc', '10:30:00', '16:30:00');
