import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  looking = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

  //  details=[
  //   {
  //     image:"../../assets/images/pic3.jpg",
  //     heading:"Car",
  //     price:"₹ 300",
  //     sortdetails:"Wishing all body"
  //   }
  public details = []
  public id:any;
  public category = [];
  

   inc(){

   }
   
  constructor(
    public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router) { }

  currentNumber = 1;

  increment() {
    this.currentNumber++;
}

decrement () {
  if(this.currentNumber>1){
      this.currentNumber--;}
}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    //console.log(this.id);
    this.getServiceDetailsData(this.id)
  }

  async getServiceDetailsData(id:any){
    var data = await this.api.getServiceDetailsById(id).subscribe((res)=>{
      this.details = res.data;
      this.category = res.data.category;
      console.log(this.category);
    });
  }

}
