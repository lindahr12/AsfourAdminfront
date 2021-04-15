import { Images } from './images.model';
import { Adresse } from "./adresse.model"

export interface Fournisseur{
    _id:string;
    nom:string;
    prenom:string;
    cin:number;
    Rib:number;
    isActive:string;
    password:string;
    phone:number;
    email:string;
    adresse:Adresse;
    dateNaissance:Date;
    raisonSocial:string;
    description:string;
    matriculeFiscale:string;

}
