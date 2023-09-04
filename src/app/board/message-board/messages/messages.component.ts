import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  user_id:any = 1;

  messages:any[] = [
    { message:"According to Landauer’s principle [1] any logically irreversible operation on information" , created_at:"2023/09/04 12:50" , user_id: 1, message_owner_name: "stoney" } ,
    {message:" is always associated with a loss ofenergy." , created_at:"2023/09/04 12:50" , user_id: 2 , message_owner_name: "Daniel"} ,
    {message:"For example, each bit of lost information leads to the release of at least kTln2 amount of hea" , created_at:"2023/09/04 12:50" , user_id: 2 , message_owner_name: "Daniel"} ,
    {message:"This type of energyloss is expected to become a substantial part of energy dissipation in VLSI circuits in near future" , created_at:"2023/09/04 12:50" , user_id: 2 , message_owner_name: "Daniel"} ,
    {message:"VLSI circuits can be circumvented by using reversible logic because reversible computation does not requireto erase any bit of information. This observation has motivated scientists to design reversible circuits for various purposes[2]-[28]. If the reversible circuit implements quantum computation and it co" , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"um teleportation [14], inﬁnitesimally secured cryptography [15] and super dense-coding [16] do not haveany classical analogue. All these unique features of quantum communication are associated with some circuits which arereversible in nature. In other words, we require quantum circ" , created_at:"2023/09/04 12:50" , user_id: 1, message_owner_name: "stoney" } ,
    {message:"Here we would like to note th" , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 2 , message_owner_name: "Daniel"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 2 , message_owner_name: "Daniel"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 2 , message_owner_name: "Daniel"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 2 , message_owner_name: "Daniel"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
    {message:"ersible gate and a quantum gate is that the classical reversible gate can not handlesuperposition of states (qubit). Consequently, set of " , created_at:"2023/09/04 12:50" , user_id: 1 , message_owner_name: "stoney"} ,
  ]
}
