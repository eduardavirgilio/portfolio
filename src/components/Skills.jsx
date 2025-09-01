import { HardSkills } from "./HardSkills";
import { SoftSkills } from "./SoftSkills";

export function Skills(){
    return(
        <div>
            <h2>Capacidade de modelar perfeitamente para suas fotos</h2>

            <h3>Hard Skills</h3>
            <HardSkills/>

            <h3>Soft Skills</h3>
            <SoftSkills/>

        </div>
    );
};