import { SideNavDetails } from './../models/sideNavDetails';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class SideNavService {
    @Output()
    private toggleSideNav: EventEmitter<SideNavDetails> = new EventEmitter();

    private sideNavDetails: SideNavDetails = new SideNavDetails();

    close() {
        this.sideNavDetails.mode = 'side';
        this.sideNavDetails.opened = false;
        this.emit();
    }

    emit() {
        this.toggleSideNav.emit(this.sideNavDetails);
    }

    getCurrentValue() {
        return this.sideNavDetails;
    }

    getEmittedValue() {
        return this.toggleSideNav;
    }

    open(mode: string) {
        this.sideNavDetails.mode = mode;
        this.sideNavDetails.opened = true;
        this.emit();
    }

    pin() {
        this.sideNavDetails.opened = true;
        this.sideNavDetails.mode = 'side';
        this.sideNavDetails.pinned = true;
        this.emit();
    }

    toggle(mode: string) {
        this.sideNavDetails.opened = !this.sideNavDetails.opened;
        this.sideNavDetails.opened ? this.open(mode) : this.close();
    }

    togglePin() {
        this.sideNavDetails.pinned = !this.sideNavDetails.pinned;
        this.sideNavDetails.pinned ? this.pin() : this.unPin();
    }

    unPin() {
        this.sideNavDetails.opened = false;
        this.sideNavDetails.mode = 'side';
        this.sideNavDetails.pinned = false;
        this.emit();
    }
}