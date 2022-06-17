import { CreateDateColumn } from "typeorm"
import { EntityWithSequence } from "typeorm-sequence"

export abstract class AbstractModel extends EntityWithSequence {



    //User insertionUser;


    @CreateDateColumn({ name: 'insertion_date' })
    insertionDate: Date


    // private User updateUser;
    @CreateDateColumn({ name: 'update_date' })
    updateDate: Date


}