insert into company (logo, company_name, description, mobile, website, email, facebook) 
 values
 ('https://www.sylvanlearning.com/images/default-source/default-album/newsylvan_4c.png', 'Sylvan Learning', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.sylvanlearning.uk', 'sylvanlearning@gmail.com', '/sylvanlearning'),
 ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNPkNSg9IRbZigjv8n2GSKEPLyuEMveg61WpoRUyn6_0uyO4q7A', 'STEM Company', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.stemcompnay.uk', 'stemcompany@gmail.com', '/stemcompany'),
 ('https://wolffdesign.com.au/wp-content/uploads/2017/02/ReachfortheStars-1.jpg', 'Reach fo the stars', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.reach4stars.uk', 'reach4stars@gmail.com', '/reach4stars'),
 ('https://www.infosaas.com/wp-content/uploads/2018/03/me_learning_with_strapline.jpg', 'Me Learning', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.melearning.uk', 'melearning@gmail.com', '/melearning'),
 ('https://png2.kisspng.com/20180816/agu/kisspng-acquired-brain-injury-neurofeedback-cognition-ther-5b7643c76bf6e5.5446958115344772554422.png', 'Next Solution', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', '+448999555', 'www.nextsolution.uk', 'nextsolution@gmail.com', '/nextsolution');


insert into school (name) 
 values
 ('Brentford School for Girls'),
 ('Camden School for Girls'),
 ('Fulham Cross Girls School'),
 ('Queen Elizabeths School for Girls'),
 ('Langley Park School for Girls');

insert into work_experience (company_id, location, subject, post_code, start_date, end_date,  pocket_money, title, max_number, description, video, start_time, end_time) 
 values
(1, 'London', 'Science', '044', '01-01-2019', '01-15-2019', 10.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc', '10:30:00', '16:30:00'),
(2, 'Bradford', 'Engineerign', '041', '01-01-2019', '01-15-2019', 15.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc', '09:30:00',' 17:30:00'),
(3, 'Manshester', 'Technology', '042', '01-01-2019', '01-15-2019', 10.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc', '10:30:00',' 16:30:00'),
(4, 'London', 'Mathmatics', '044',' 01-01-2019', '01-15-2019', 10.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc','11:30:00', '19:30:00'),
(1, 'Liverpool', 'Engineering', '040', '01-01-2019',' 01-15-2019', 10.5, 'Work Experience Opportunity', 3, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'https://www.youtube.com/watch?v=Q_11rwb4vEc', '10:30:00', '16:30:00');

insert into girl (user_name, first_name, last_name, email, school_id, other_school, birthdate, password, grade, city, school_email, emergency_name, phone_num, emergency_num, emergency_email, relation, period, begin_date, end_date, subjects, fav_subjects, enjoy_school, hobbies, future_job, interested_job, files, famous_entrepreneur, be_entrepreneur, entrepreneurs_women, important_in_career1, important_in_career2, important_in_career3, important_factors1, important_factors2, important_factors3, person_have_career, clicked_pic1, clicked_pic2, clicked_pic3, clicked_pic4, pursue_in_tech) 
 values
 ('hadam', 'Helary', 'Adam', 'hadam@nameschool.uk', 1, '', '01-01-2005', '$2a$10$t3bm8JUU3dwAvUpE0Pr/e.S5XDnaX./JaGpIv5uDX7I51n4JVKH42', '9th Grade', 'London', 'london@girlschool.uk', 'Smith Adam', '+4405556666', '+4405556666', 'smithadam@gmail.com', 'father', '1 year', '2/2/2019', '2/2/2020', '{Engineering, Science}', '{Engineering, Science}', 'Games', 'Cooking', 'Teacher', 'Engineer', 'halaryAdamCV.pdf', 'John Adam', 'John Adam', 'Madleen Adam',' {nice, wonderful, amazing}', '{nice, wonderful, amazing}', '{nice, wonderful, amazing}',  '{nice, wonderful, amazing}',  '{nice, wonderful, amazing}', '{nice, wonderful, amazing}', 'Epsum','Epsum','Epsum','Epsum', 'Epsum', 'Epsum');


insert into registration ( work_experience_id, girl_id, status,registration_date, response) 
 values
 (1, 1, 'avilable', '12-12-2018', 'approve');
 
