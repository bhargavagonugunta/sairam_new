import { CakeData } from "../../../../../ordernow/cakes/CakeData";
import { NamkeenData } from "../../../../../ordernow/namkeen/NamkeenData";
import { SweetData } from "../../../../../ordernow/sweets/SweetData";
import { DryFruitsData } from "../../../../../ordernow/dryfruits/DryFruitsData";
import { HomeSquareCardData } from "../../../../square-card/square-card-comp/SquareCardData";

const YouMayLikeData = [...CakeData, ...DryFruitsData, ...HomeSquareCardData, ...NamkeenData, ...SweetData];

export default YouMayLikeData;