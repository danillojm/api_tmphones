export interface   Service{


     getAll();
     insert({ }: Object ): Promise<Object>;
}