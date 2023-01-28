import { Injectable, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/events-service/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  @Output() event = new EventEmitter<Event>();
  store: any = {};

  constructor() { }

  /**
   * Register a event
   * @param event 
   */
  register(event: Event): void {
    this.event.emit(event);
  }

  get(key: string) {
    return this.store[key];
  }

  set(key: string, value: any): void {
    this.store[key] = value;
  }
}
