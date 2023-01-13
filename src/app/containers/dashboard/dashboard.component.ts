import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  multi: any[] = [
    {
      "name": "Incoming tickets",
      "series": [
        {
          "name": "January",
          "value": 23
        },
        {
          "name": "February",
          "value": 25
        },
        {
          "name": "March",
          "value": 32
        },
        {
          "name": "April",
          "value": 12
        },
        {
          "name": "May",
          "value": 18
        },
        {
          "name": "June",
          "value": 14
        },
        {
          "name": "July",
          "value": 21
        },
        {
          "name": "August",
          "value": 14
        },
        {
          "name": "September",
          "value": 92
        },
        {
          "name": "November",
          "value": 65
        },
        {
          "name": "December",
          "value": 32
        }
      ]
    },

    {
      "name": "Solved tickets",
      "series": [
        {
          "name": "January",
          "value": 20
        },
        {
          "name": "February",
          "value": 30
        },
        {
          "name": "March",
          "value": 21
        },
        {
          "name": "April",
          "value": 12
        },
        {
          "name": "May",
          "value": 32
        },
        {
          "name": "June",
          "value": 14
        },
        {
          "name": "July",
          "value": 27
        },
        {
          "name": "August",
          "value": 13
        },
        {
          "name": "September",
          "value": 32
        },
        {
          "name": "November",
          "value": 65
        },
        {
          "name": "December",
          "value": 32
        }
      ]
    },

    {
      "name": "Unsolved tickets",
      "series": [
        {
          "name": "January",
          "value": 123
        },
        {
          "name": "February",
          "value": 45
        },
        {
          "name": "March",
          "value": 23
        },
        {
          "name": "April",
          "value": 25
        },
        {
          "name": "May",
          "value": 32
        },
        {
          "name": "June",
          "value": 12
        },
        {
          "name": "July",
          "value": 45
        },
        {
          "name": "August",
          "value": 14
        },
        {
          "name": "September",
          "value": 30
        },
        {
          "name": "November",
          "value": 21
        },
        {
          "name": "December",
          "value": 32
        }
      ]
    }
  ];

  single: any[] = [
    {
      "name": "Total tickets",
      "value": 40632,
      "extra": {
        "code": "TT"
      }
    },
    {
      "name": "Open tickets",
      "value": 50000,
      "extra": {
        "code": "OT"
      }
    },
    {
      "name": "Closed tickets",
      "value": 36745,
      "extra": {
        "code": "CT"
      }
    }
  ];

  view1: [number, number] = [800, 400];
  view2: [number, number] = [800, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Months';
  yAxisLabel: string = 'Tickets';
  timeline: boolean = true;

  onSelect(data: any): void {
    console.log('Item clicked', data);
  }

  onActivate(data: any): void {
    console.log('Activate', data);
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', data);
  }
}
