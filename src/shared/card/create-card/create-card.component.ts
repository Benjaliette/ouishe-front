import { Component, inject } from '@angular/core';
import { ZardCardComponent } from '../card.component';
import { ZardIconComponent } from '@/shared/icon/icon.component';
import { ZardDialogService } from '@/shared/dialog/dialog.service';
import { CreateFormComponent } from '@/shared/wishlist/create-form/create-form.component';
import { WishStateService } from '@/app/wish/wish-state.service';

interface iDialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-create-card',
  imports: [ZardCardComponent, ZardIconComponent],
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss', '../wish-card.component.scss'],
})
export class CreateCardComponent {
  private dialogService = inject(ZardDialogService);
  readonly #wishService = inject(WishStateService)

  openDialog() {
    this.dialogService.create({
      zTitle: 'Créer une nouvelle liste',
      zDescription: `On y est, crée ta nouvelle liste de souhaits et le génie de la lampe exaucera tous tes désirs !`,
      zContent: CreateFormComponent,
      zOkText: 'Continuer',
      zCancelText: 'Annuler',
      zOnOk: instance => {
        this.#wishService.addWish({
          title: instance.form.value.title!,
          description: instance.form.value.description!,
        });
      },
      zWidth: '425px',
    });
  }
}
