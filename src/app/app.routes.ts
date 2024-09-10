import { Routes } from '@angular/router';
import { ComponentComponent } from './components/component/component.component';
import { ParentComponent } from './components/parent/parent.component';
import { HeaderComponent } from './components/header/header.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { PapaComponent } from './components/papa/papa.component';
import { PapaOComponent } from './components/papa-o/papa-o.component';
import { BapuComponent } from './components/bapu/bapu.component';
import { LearnHostComponent } from './components/learn-host/learn-host.component';
import { LifecycleParentComponent } from './components/lifecycle-parent/lifecycle-parent.component';
import { ViewParentComponent } from './components/view-parent/view-parent.component';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { ClassStyleBindingComponent } from './components/class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { ParentTwoWayBindingComponent } from './components/parent-two-way-binding/parent-two-way-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TemplateReferenceVariableComponent } from './components/template-reference-variable/template-reference-variable.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { RoutesComponent } from './components/routes/routes.component';
import { Page404Component } from './components/page404/page404.component';

// Go line wise

export const routes: Routes = [
  {
    path: '',
    title: 'Angular Concepts',
    component: HeaderComponent,
    children: [
      {
        path: '',
        redirectTo: 'component',
        pathMatch: 'full',
      },
      {
        path: 'component',
        component: ComponentComponent, // Component detail guide
      },
      { path: 'parent', component: ParentComponent }, // explain how service works
      { path: 'parent2', component: Parent2Component }, // explain how service works
      { path: 'componentA', component: ComponentAComponent }, // explain how to subscribe to changes in services data
      { path: 'componentB', component: ComponentBComponent }, // explain how to subscribe to changes in services data
      { path: 'papa', component: PapaComponent }, // explain how @input works
      { path: 'papao', component: PapaOComponent }, // explain how @Output decorator and output function works
      { path: 'bapu', component: BapuComponent }, // explain how ng-content works
      { path: 'host', component: LearnHostComponent }, // explain How to add attributes and events to the host element
      { path: 'lifecycle', component: LifecycleParentComponent }, // explain about the lifecycle methods(hooks) and how to access ElementRef of child components using @ViewChild
      { path: 'viewp', component: ViewParentComponent }, // explain about the @ViewChild and @ViewChildren
      { path: 'template-syntax', component: TemplateSyntaxComponent }, // explain about the concepts used in the template syntax (diff. b/w attribute and properties)
      { path: 'class-style-binding', component: ClassStyleBindingComponent }, // explain about style and class binding
      { path: 'event-binding', component: EventBindingComponent }, // explain about event binding
      { path: 'two-way-data-binding', component: ParentTwoWayBindingComponent }, // explain about two-way binding
      { path: 'control-flow', component: ControlFlowComponent }, // explain about control flow statements ( @for , @if, @else, @switch, @case, @default) and async pipe
      { path: 'pipes', component: PipesComponent }, // explain about built-in pipes except async pipe and custom pipes
      { path: 'template-ref', component: TemplateReferenceVariableComponent }, // explain about template reference variable
      { path: 'directives', component: DirectivesComponent },
      { path: 'route/:id', component: RoutesComponent },
    ],
  },
  { path: '**', component: Page404Component },
];
