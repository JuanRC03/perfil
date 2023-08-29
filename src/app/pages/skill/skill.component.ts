import { Component, OnInit } from '@angular/core';

interface Skills{
  skill:string;
  porcent:string;
}

interface SkillNode {
  name: string;
  children?: Skills[];
}

const DATA_SKILLS: SkillNode[] = [
  {
    name: 'FrontEnd',
    children: [ {skill: 'HTML', porcent:'100%'},
                {skill: 'CSS', porcent:'100%'},
                {skill: 'Angular', porcent:'100%'},
                {skill: 'Bootstrap', porcent:'90%'},
                {skill: 'SCSS', porcent:'80%'},
              ],
  },
  {
    name: 'Lenguajes de programación',
    children: [ {skill: 'Java', porcent:'100%'},
                {skill: 'C++', porcent:'100%'},
                {skill: 'C#', porcent:'100%'},
                {skill: 'JavaScript', porcent:'100%'},
                {skill: 'TypeScript', porcent:'90%'},
                {skill: 'SQL', porcent:'90%'},
                {skill: 'Python', porcent:'60%'},
              ],
  },
  {
    name: 'Gestores de base de datos',
    children: [ {skill: 'Postgresql', porcent:'90%'},
                {skill: 'SQL Server', porcent:'90%'},
                {skill: 'MySQL', porcent:'90%'},
                {skill: 'Firebase', porcent:'70%'},
              ],
  },
  {
    name: 'Extras',
    children: [ {skill: 'Git', porcent:'100%'},
                {skill: 'GitHub', porcent:'100%'},
                {skill: 'GitLab', porcent:'80%'},
                {skill: 'Docker', porcent:'60%'},
              ],
  },
];


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  public openList = 'frontend';
  
  dataSource: any = { data: [] }; 

  constructor() {
    
  }

  ngOnInit(): void {
    this.dataSource.data = DATA_SKILLS;
  }

  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}
