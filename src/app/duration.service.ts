import {Injectable} from '@angular/core';
import {BehaviorSubject, interval, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DurationService {
  private time = new BehaviorSubject<string>('00:00:00'); // Datenstrom mit Startwert
  // 2er Datenstrom jede Sekund eins hochzählt
  private interval = interval(1000).pipe(
    // map(seconds => (24 * 60 * 60 * 1000) - seconds),
    // map(seconds => new Date(seconds * 1000).toISOString().slice(11, 19))
    map(seconds => `${seconds}`)
  )
  private seconds = 0;
  private pause = false;
  private started = false;

  startTimer() {
    if (!this.started) {
      // Reaktion auf neue Daten im interval Datenstrom mit der Funktion hinter den Klammern
      this.interval.subscribe((x) => {
        if(this.pause) {
          // Next -> Daten in den Datenstrom hinzufügen (Time Datenstrom)
          this.time.next(`pause`)
        } else {
          ++this.seconds;
          this.time.next((new Date((24 * 60 * 60 * 1000 - this.seconds * 1000))).toISOString().slice(11, 19));
        }
      });
    } else {
      this.pause = !this.pause;
    }

    this.started = true;
  }

  getTime() {
    return this.time.asObservable();
  }
}
