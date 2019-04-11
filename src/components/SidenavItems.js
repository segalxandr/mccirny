/* eslint-disable no-unused-vars */
const Selected = {
  props: {
    render: {
      default: h => null
    }
  },
  data() {
    return {
      selected: 0
    };
  },
  methods: {
    select(value) {
      this.selected = value;
    }
  },
  render() {
    return this.$props.render({
      selected: this.selected,
      select: this.select
    });
  }
};

const SidenavList = {
  functional: true,
  render: (h, { props }) => (
    <div>
      {props.names
        .map(name => `${name} - ${props.num}`)
        .map((url, i) => (
          <div
            class={props.selected == i ? "bg-green" : ""}
            onClick={evnet => props.select(i)}
          >
            {url}
          </div>
        ))}
    </div>
  )
};
export default {
  functional: true,
  render: (h, { props }) => (
    <div>
      <Selected
        render={({ selected, select }) => (
          <div>
            {/* <input
              class="text-3xl"
              type="number"
              onChange={event => select(event.target.value)}
              value={selected}
            /> */}
            <SidenavList
              names={props.names}
              num={props.num}
              selected={selected}
              select={select}
            />
          </div>
        )}
      />
    </div>
  )
};
