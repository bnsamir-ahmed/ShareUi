import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
// import { DecimalPipe } from '@angular/common';
export class CardComponent {
    value = 0;
    count = 0;
    icon = '';
    title = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CardComponent, isStandalone: true, selector: "app-card", inputs: { value: "value", count: "count", icon: "icon", title: "title" }, ngImport: i0, template: "<div  class=\"card card-invoices\">\n  <p class='prim-color title-card'>\n    {{value}}\n  </p>\n   <span class=\"my-5\">\n    <!-- 30 -->\n    {{count  }}\n  </span>\n  <div class=\"ant-flex ant-flex-align-center\">\n\n    <img [src]=\"icon\" alt=\"\" />\n    <span class=\"mx-10 gray-color fs-12\">\n      {{title}}\n    </span>\n  </div>\n\n</div>\n", styles: [".card-invoices{padding:16px;display:flex;flex-direction:column;justify-content:space-between}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-card', standalone: true, imports: [], template: "<div  class=\"card card-invoices\">\n  <p class='prim-color title-card'>\n    {{value}}\n  </p>\n   <span class=\"my-5\">\n    <!-- 30 -->\n    {{count  }}\n  </span>\n  <div class=\"ant-flex ant-flex-align-center\">\n\n    <img [src]=\"icon\" alt=\"\" />\n    <span class=\"mx-10 gray-color fs-12\">\n      {{title}}\n    </span>\n  </div>\n\n</div>\n", styles: [".card-invoices{padding:16px;display:flex;flex-direction:column;justify-content:space-between}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], count: [{
                type: Input
            }], icon: [{
                type: Input
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFDakQsaURBQWlEO0FBU2pELE1BQU0sT0FBTyxhQUFhO0lBQ2YsS0FBSyxHQUEyQixDQUFDLENBQUM7SUFDbEMsS0FBSyxHQUEyQixDQUFDLENBQUM7SUFDbEMsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixLQUFLLEdBQVcsRUFBRSxDQUFDO3dHQUpqQixhQUFhOzRGQUFiLGFBQWEsOElDVjFCLGtXQWlCQTs7NEZEUGEsYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxVQUFVLGNBQ1IsSUFBSSxXQUNQLEVBQUU7OEJBS0YsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2FyZCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5sZXNzJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSAwO1xuICBASW5wdXQoKSBjb3VudDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IDA7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG5cbn1cbiIsIjxkaXYgIGNsYXNzPVwiY2FyZCBjYXJkLWludm9pY2VzXCI+XG4gIDxwIGNsYXNzPSdwcmltLWNvbG9yIHRpdGxlLWNhcmQnPlxuICAgIHt7dmFsdWV9fVxuICA8L3A+XG4gICA8c3BhbiBjbGFzcz1cIm15LTVcIj5cbiAgICA8IS0tIDMwIC0tPlxuICAgIHt7Y291bnQgIH19XG4gIDwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cImFudC1mbGV4IGFudC1mbGV4LWFsaWduLWNlbnRlclwiPlxuXG4gICAgPGltZyBbc3JjXT1cImljb25cIiBhbHQ9XCJcIiAvPlxuICAgIDxzcGFuIGNsYXNzPVwibXgtMTAgZ3JheS1jb2xvciBmcy0xMlwiPlxuICAgICAge3t0aXRsZX19XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cblxuPC9kaXY+XG4iXX0=