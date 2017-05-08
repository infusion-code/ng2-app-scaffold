import { PanelDetails } from './../models/panelDetails';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class SidePanelService {
    @Output()
    private toggleSidePanel: EventEmitter<PanelDetails> = new EventEmitter();

    private panelDetails: PanelDetails = new PanelDetails();

    close() {
        this.panelDetails.id = null;
        this.panelDetails.opened = false;
        this.emit();
    }

    emit() {
        this.toggleSidePanel.emit(this.panelDetails);
    }

    getEmittedValue() {
        return this.toggleSidePanel;
    }

    open(id: string) {
        this.panelDetails.id = id;
        this.panelDetails.opened = true;
        this.emit();
    }

    toggle(id: string) {
        this.panelDetails.opened = !this.panelDetails.opened;
        this.panelDetails.opened ? this.open(id) : this.close();
    }
}