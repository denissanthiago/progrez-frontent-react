

export interface IOptionsItem {
    card_list:     IOptionItem;
    pays_transfer: IOptionItem;
    support:       IOptionItem;
    enterprises:   IOptionItem;
}

export interface Child {
    between_cards?: IOptionItem;
    banks?:         IOptionItem;
    credit_card?:   IOptionItem;
    lock?:          IOptionItem;
    change_pass?:   IOptionItem;
}

export interface IOptionItem {
    name:  string;
    child: Child[];
}

