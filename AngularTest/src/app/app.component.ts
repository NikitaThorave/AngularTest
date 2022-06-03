import { Component ,OnInit} from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MyDialogComponent } from './Components/my-dialog/my-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularTest';
  dob = new Date();
  dig = 1234444.45678944;
  myObs$ : any;

  subscription = new Subscription();

  val = 0;
  total1 = 38;
  total2 = 10;

  increment1() {
    this.total1 += 1;
  }

  increment2() {
    this.total2 += 1;
  }

  constructor(
    private router: Router ,
    public dialog: MatDialog
    ) {}
  ngOnInit(): void {
  }
  openDialog()
  {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      minWidth: '50vw',
      width: '5vw',
      minHeight: '50vh',
      disableClose: true,
      backdropClass: 'dlg-bd',
      data: {
        name: 'vivekkumar',
        nationality: 'India',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
