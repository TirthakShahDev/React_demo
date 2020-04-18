export class Common {
    public static readonly Module = 'Module';
    public static readonly DATEFORMAT = "{y}-{m}-{d}";
    static Modules = class Modules {
        public static readonly DASHBOARD = 'DashBoard';
        public static readonly ARTICLE = 'Article';
    }

    static Actions = class Actions {
        public static readonly CAN_READ = 'CanRead';
        public static readonly CAN_DELETE = 'CanDelete';
        public static readonly CAN_UPDATE = 'CanUpdate';
        public static readonly CAN_EXPORT = 'CanExport';
        public static readonly CAN_CREATE = 'CanCreate';
    }

    static Colors = class Colors {
        public static readonly PRIMARY = 'primary'
        public static readonly DANGER = 'danger'
        public static readonly SECONDARY = 'secondary'
        
    }

    static Modes = class Modes {
        public static readonly ADD = 'Add'
        public static readonly Edit = 'Edit'
    }
}
