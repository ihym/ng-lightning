export const routes = [
  { path: 'accordion', loadChildren: () => import('./accordion/accordion.module').then(m => m.NglDemoAccordionModule) },
  { path: 'alert', loadChildren: () => import('./alert/alert.module').then(m => m.NglDemoAlertModule) },
  { path: 'avatar', loadChildren: () => import('./avatar/avatar.module').then(m => m.NglDemoAvatarModule) },
  { path: 'badges', loadChildren: () => import('./badges/badges.module').then(m => m.NglDemoBadgesModule) },
  { path: 'breadcrumbs', loadChildren: () => import('./breadcrumbs/breadcrumbs.module').then(m => m.NglDemoBreadcrumbsModule) },
  { path: 'button-icons', loadChildren: () => import('./button-icons/button-icons.module').then(m => m.NglDemoButtonIconsModule), label: 'Button Icons' },
  { path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.NglDemoButtonsModule) },
  { path: 'carousel', loadChildren: () => import('./carousel/carousel.module').then(m => m.NglDemoCarouselModule) },
  { path: 'checkboxes', loadChildren: () => import('./checkboxes/checkboxes.module').then(m => m.NglDemoCheckboxesModule) },
  { path: 'colorpicker', loadChildren: () => import('./colorpicker/colorpicker.module').then(m => m.NglDemoColorpickerModule) },
  { path: 'comboboxes', loadChildren: () => import('./comboboxes/comboboxes.module').then(m => m.NglDemoComboboxesModule) },
  { path: 'datatables', loadChildren: () => import('./datatables/datatables.module').then(m => m.NglDemoDatatablesModule) },
  { path: 'datepickers', loadChildren: () => import('./datepickers/datepickers.module').then(m => m.NglDemoDatepickersModule) },
  { path: 'dynamicicons', loadChildren: () => import('./dynamicicons/dynamicicons.module').then(m => m.NglDemoDynamicIconsModule), label: 'Dynamic Icons' },
  { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.NglDemoFilesModule) },
  { path: 'file-upload', loadChildren: () => import('./file-upload/file-upload.module').then(m => m.NglDemoFileUploadModule), label: 'File Selector' },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.NglDemoIconsModule) },
  { path: 'input', loadChildren: () => import('./input/input.module').then(m => m.NglDemoInputModule) },
  { path: 'lookups', loadChildren: () => import('./lookups/lookups.module').then(m => m.NglDemoLookupsModule) },
  { path: 'menus', loadChildren: () => import('./menus/menus.module').then(m => m.NglDemoMenusModule) },
  { path: 'modals', loadChildren: () => import('./modals/modals.module').then(m => m.NglDemoModalsModule) },
  { path: 'paginations', loadChildren: () => import('./paginations/paginations.module').then(m => m.NglDemoPaginationsModule) },
  { path: 'pick', loadChildren: () => import('./pick/pick.module').then(m => m.NglDemoPickModule) },
  { path: 'picklist', loadChildren: () => import('./picklist/picklist.module').then(m => m.NglDemoPicklistModule) },
  { path: 'pills', loadChildren: () => import('./pills/pills.module').then(m => m.NglDemoPillsModule) },
  { path: 'popovers', loadChildren: () => import('./popovers/popovers.module').then(m => m.NglDemoPopoversModule) },
  { path: 'progressbar', loadChildren: () => import('./progressbar/progressbar.module').then(m => m.NglDemoProgressBarModule), label: 'Progress Bar' },
  { path: 'prompt', loadChildren: () => import('./prompt/prompt.module').then(m => m.NglDemoPromptModule) },
  { path: 'radio-group', loadChildren: () => import('./radio-group/radio-group.module').then(m => m.NglDemoRadioGroupModule), label: 'Radio Group' },
  { path: 'ratings', loadChildren: () => import('./ratings/ratings.module').then(m => m.NglDemoRatingsModule) },
  { path: 'sections', loadChildren: () => import('./sections/sections.module').then(m => m.NglDemoSectionsModule) },
  { path: 'select', loadChildren: () => import('./select/select.module').then(m => m.NglDemoSelectModule) },
  { path: 'slider', loadChildren: () => import('./slider/slider.module').then(m => m.NglDemoSliderModule) },
  { path: 'spinners', loadChildren: () => import('./spinners/spinners.module').then(m => m.NglDemoSpinnersModule) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.NglDemoTabsModule) },
  { path: 'textarea', loadChildren: () => import('./textarea/textarea.module').then(m => m.NglDemoTextareaModule) },
  { path: 'toast', loadChildren: () => import('./toast/toast.module').then(m => m.NglDemoToastModule) },
  { path: 'tooltips', loadChildren: () => import('./tooltips/tooltips.module').then(m => m.NglDemoTooltipsModule) },
];
