CREATE DATABASE clinicaVeterinaria;

USE clinicaVeterinaria;

create table cliente(
     id integer not null primary key,
     nombre varchar(20) not null,
     apellidos varchar(20) not null,
     dni varchar(20) not null,
     direccion varchar(20) not null,
     numTelefono integer not null,
     codigoPostal integer not null
     );

create table mascota(
     id integer not null primary key,
     nombre varchar(20) not null,
     vacunas varchar(20)not null,
     raza varchar(20) not null
     );

create table cita(
     id integer not null primary key,
     fecha date not null,
     hora integer not null,
     precio decimal not null
     );

create table recepcionista(
     id integer not null primary key,
     nombre varchar(20) not null,
     apellidos varchar(20) not null,
     direccion varchar(20) not null,
     dni varchar(20) not null
     );



create table veterinario(
    id integer not null primary key,
    nombre varchar(20) not null,
    apellidos varchar(20) not null,
    dni varchar(20) not null,
    direccion varchar(20) not null
    );