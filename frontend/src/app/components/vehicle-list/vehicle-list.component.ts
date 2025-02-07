import { Component, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// biome-ignore lint/style/useImportType: <explanation>
import { VehicleService } from '../../services/vehicle.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  vehicles: any[] = [];
  vehicleForm = {
    id: '',
    placa: '',
    chassi: '',
    renavam: '',
    modelo: '',
    marca: '',
    ano: '',
  };
  isEditing = false;
  showModal = false;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles = data;
    });
  }

  openModal(): void {
    this.resetForm();
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  submitForm(): void {
    if (this.isEditing) {
      this.vehicleService.updateVehicle(this.vehicleForm.id, this.vehicleForm).subscribe(() => {
        this.resetForm();
        this.getVehicles();
        this.closeModal();
      });
    } else {
      this.vehicleService.createVehicle(this.vehicleForm).subscribe(() => {
        this.resetForm();
        this.getVehicles();
        this.closeModal();
      });
    }
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  editVehicle(vehicle: any): void {
    console.log('vehicle',vehicle);
    this.vehicleForm = { ...vehicle };
    this.isEditing = true;
    this.showModal = true;
  }

  deleteVehicle(id: string): void {
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      this.getVehicles();
    });
  }

  resetForm(): void {
    this.vehicleForm = {
      id: '',
      placa: '',
      chassi: '',
      renavam: '',
      modelo: '',
      marca: '',
      ano: '',
    };
    this.isEditing = false;
    this.closeModal();
  }
}
