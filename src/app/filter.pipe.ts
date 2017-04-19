import { Pipe } from '@angular/core';

@Pipe ({
  name:"filter"
})
export class FilterPipe{
  transform(filtered){
      return filtered;
      }
}
