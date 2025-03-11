import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FluidModule } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { TextareaModule } from 'primeng/textarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CountryService } from './country.service';
import { NodeService } from './node.service';
import { FormsModule } from '@angular/forms';
//import { CommonModule } from '@angular/common';
import { KnobModule } from 'primeng/knob';
import { DatePickerModule } from 'primeng/datepicker';
import { ListboxModule } from 'primeng/listbox';

import { TreeSelectModule } from 'primeng/treeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-diseno',
  imports: [
    FormsModule,
    //CommonModule, 
    SelectModule,
    TreeSelectModule,
    InputGroupModule,
    AutoCompleteModule,
    RadioButtonModule,
    ButtonModule,
    ButtonGroupModule,
    SplitButtonModule,
    InputTextModule,
    FluidModule,
    MultiSelectModule,
    TextareaModule,
    InputNumberModule,
    InputGroupAddonModule,
    ListboxModule,
    KnobModule,
    SelectButtonModule,
    InputIconModule,
    FloatLabelModule,
    CheckboxModule,
    DatePickerModule,
    IconFieldModule],
  providers: [CountryService, NodeService],
  templateUrl: './diseno.component.html',
  styleUrl: './diseno.component.scss'
})
export class DisenoComponent implements OnInit {
  items: MenuItem[] = [];

  loading = [false, false, false, false];
  floatValue: any = null;

  autoValue: any[] | undefined;

  autoFilteredValue: any[] = [];

  selectedAutoValue: any = null;

  calendarValue: any = null;

  inputNumberValue: any = null;

  sliderValue: number = 50;

  ratingValue: any = null;

  colorValue: string = '#1976D2';

  radioValue: any = null;

  checkboxValue: any[] = [];

  switchValue: boolean = false;

  listboxValues: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  listboxValue: any = null;

  dropdownValues = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  dropdownValue: any = null;

  multiselectCountries: any[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  multiselectSelectedCountries!: any[];

  toggleValue: boolean = false;

  selectButtonValue: any = null;

  selectButtonValues: any = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }];

  knobValue: number = 50;

  inputGroupValue: boolean = false;

  treeSelectNodes!: any[];

  selectedNode: any = null;

  countryService = inject(CountryService);

  nodeService = inject(NodeService);
  ngOnInit() {
    this.items = [{ label: 'Update', icon: 'pi pi-refresh' }, { label: 'Delete', icon: 'pi pi-times' }, { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' }, { separator: true }, { label: 'Setup', icon: 'pi pi-cog' }];
    this.countryService.getCountries().then((countries) => {
      this.autoValue = countries;
    });

    this.nodeService.getFiles().then((data) => (this.treeSelectNodes = data));
  }

  load(index: number) {

    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
  }
  filterCountry(event: AutoCompleteCompleteEvent) {
    const filtered: any[] = [];
    const query = event.query;

    for (let i = 0; i < (this.autoValue as any[]).length; i++) {
      const country = (this.autoValue as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.autoFilteredValue = filtered;
  }
}
